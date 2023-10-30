declare namespace App {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type Any = any;

  interface Dictionary<T> {
    [key: number | string]: T;
  }

  type LayoutComponent<T> = {
    children?: T;
  };

  type ToastPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

  type ToastConfig = {
    theme?: string;
    duration?: number;
    placement?: ToastPlacement;
  };

  type ErrorValue = {
    children?: Record<string, ErrorValue>;
    messages: string[];
  };

  type ResponseError = {
    message: string;
    errors: Record<string, ErrorValue>;
    status?: number;
  };

  type MessageError = ResponseError['errors'];

  type ButtonType =
    | 'primary'
    | 'default'
    | 'text'
    | 'textSecondary'
    | 'icon'
    | 'iconSecondary';

  type AutoSizeType = {
    minRows?: number;
    maxRows?: number;
  };

  type RadioOption = {
    label: string;
    value: string | number | boolean;
    icon?: string;
    disabled?: boolean;
    content?: () => ReactNode;
  };

  type CheckboxOption = {
    label: string;
    value: string | number;
    disabled?: boolean;
  };

  type ResponseOption = RadioOption & {
    response: string;
  };

  type Breadcrumb = {
    link?: string;
    text: string;
  };

  type SelectValue = boolean | string | string[] | number | number[];

  type SelectItem = {
    value: string | number | boolean;
    label: string;
    disabled?: boolean;
    icon?: string;
  };

  type MenuItem = {
    label: string;
    link: string;
    icon: string;
  };

  type PickerType = 'date' | 'week' | 'month' | 'year' | 'quarter';

  type DropdownType = 'text' | 'basicButton' | 'menuButton';

  type DropdownTriggerType = 'click' | 'hover' | 'contextMenu';

  type Placement =
    | 'bottom'
    | 'bottomLeft'
    | 'bottomRight'
    | 'top'
    | 'topLeft'
    | 'topRight';

  type ButtonVariant =
    | 'accent'
    | 'primary'
    | 'secondary'
    | 'default'
    | 'positive'
    | 'destructive'
    | 'link';

  type WithSelectors<S> = S extends { getState: () => infer T }
    ? S & { use: { [K in keyof T]: () => T[K] } }
    : never;

  type SizeType = 'small' | 'middle' | 'large' | undefined;

  type RequestCallback = (token: string) => Promise<void>;

  type SkeletonShape = 'circle' | 'square';

  type SkeletonSize = number | 'large' | 'small' | 'default';

  type SkeletonAvatar = {
    shape?: SkeletonShape;
    size?: SkeletonSize;
  };

  type SkeletonTitle = {
    width?: number | string;
  };

  type SkeletonParagraph = {
    width?: number | string | Array<number | string>;
    rows?: number;
  };

  type ScrollValue = {
    clientHeight: number;
    clientWidth: number;
    left: number;
    scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
    scrollWidth: number;
    top: number;
  };
}
