import * as React from 'react';
import * as ReactMD from 'react-md';
import {
  DropdownMenu,
} from 'react-md';

const anchor = {
  x: DropdownMenu.HorizontalAnchors.INNER_LEFT,
  y: DropdownMenu.VerticalAnchors.BOTTOM,
};

const LIST_PADDING = 32;
const HEADER_HEIGHT = 80;
const EMPTY_STYLE: { height: string | null } = { height: null };

interface IProps {
  id: string;
  text: string;
  menuItems: any[];
}

interface IState {
  visible: boolean;
  listStyle: Partial<CSSStyleDeclaration>;
}

export default class DocumentMenu extends React.Component<IProps, IState> {

  private cachedStyle: Partial<CSSStyleDeclaration> | null = null;
  private viewportHeight: number | null = null;

  constructor(props: IProps) {
    super(props);
    
    this.state = { visible: false, listStyle: EMPTY_STYLE };
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (this.state.visible && this.state.visible !== prevState.visible) {
      this.keepListInViewport();
    }
  }

  /**
   * If the user has a small desktop screen or has a short-in-height desktop, the list's height should
   * be updated to show as many items as possible before showing 1/3 of the one that is too close to the
   * bottom of the viewport.
   *
   * Also caches the style based on window height.
   */
  keepListInViewport = () => {
    if (this.cachedStyle && this.viewportHeight === window.innerHeight) {
      return;
    }

    this.viewportHeight = window.innerHeight;
    const list = document.getElementById(`document-${this.props.id}-list`);
    if (list) {
      const items: any[] = [];
      items.push.apply(items, list.querySelectorAll('.md-list-item'));
      items.push.apply(items, list.querySelectorAll('.md-divider'));
      const allowed = window.innerHeight - HEADER_HEIGHT - LIST_PADDING;
      let total = 0;
      let height = 0;
      items.forEach(item => {
        const itemHeight = Math.max(17, item.offsetHeight); // cheating. The "real" height of dividers is 16 + 1
        if (total + itemHeight > allowed) {
          height = total + (itemHeight / 3);
          return;
        }

        total += itemHeight;
      });

      if (height) {
        this.cachedStyle = { height } as any;
        this.setState({ listStyle: this.cachedStyle } as any);
      } else {
        this.cachedStyle = EMPTY_STYLE;
      }
    }
  }

  handleVisibility = (visible: boolean) => {
    let { listStyle } = this.state;
    if (visible && this.viewportHeight === window.innerHeight) {
      listStyle = this.cachedStyle as any;
    } else if (!visible && listStyle.height !== null) {
      listStyle = EMPTY_STYLE;
    }

    this.setState({ visible, listStyle });
  }

  render() {
    const { visible, listStyle } = this.state;
    const { id, text, ...props } = this.props;

    const AccessibleFakeInkedButton = ReactMD.AccessibleFakeInkedButton as any;

    return (
      <DropdownMenu
        {...props as any}
        cascading={true}
        id={`document-${id}`}
        visible={visible}
        belowAnchor={anchor}
        position={DropdownMenu.Positions.BELOW}
        listHeightRestricted={false}
        onVisibilityChange={this.handleVisibility}
        listStyle={listStyle}
        listClassName="menus__google-docs__menu__list"
      >
        <AccessibleFakeInkedButton
          tabbedClassName="md-btn md-btn--hover"
          className={'md-btn menus__google-docs__menu ' + (visible ? 'md-paper md-paper--2' : '')}
          style={{ padding: '10px' }}
        >
          {text}
        </AccessibleFakeInkedButton>
      </DropdownMenu>
    );
  }
}
