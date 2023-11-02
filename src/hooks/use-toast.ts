import { ToastTypeEnum } from 'enums/app';

// eslint-disable-next-line max-lines-per-function
const useToast = () => {
  const { notification } = AntApp.useApp();

  const showToast = (
    content: { message?: string; description: string },
    type: ToastTypeEnum,
    config?: App.ToastConfig,
  ): void => {
    const { message, description } = content;
    const { duration, placement } = config || {};
    const className = message ? 'toast toast--has-header' : 'toast';

    notification[type]({
      className,
      message,
      description,
      duration,
      placement,
    });
  };

  const showSuccess = (
    description: string,
    message?: string,
    config?: App.ToastConfig,
  ) => {
    showToast({ description, message }, ToastTypeEnum.SUCCESS, config);
  };

  const showInfo = (
    description: string,
    message?: string,
    config?: App.ToastConfig,
  ) => {
    showToast({ description, message }, ToastTypeEnum.INFO, config);
  };

  const showWarning = (
    description: string,
    message?: string,
    config?: App.ToastConfig,
  ) => {
    showToast({ description, message }, ToastTypeEnum.WARNING, config);
  };

  const showError = (
    description: string,
    message?: string,
    config?: App.ToastConfig,
  ) => {
    showToast({ description, message }, ToastTypeEnum.ERROR, config);
  };

  return {
    showError,
    showInfo,
    showSuccess,
    showWarning,
  };
};

export default useToast;
