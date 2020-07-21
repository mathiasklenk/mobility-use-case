import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export function usePassbase(props) {
  const { onFinished, prefilled } = props;

  const ref = useRef();

  const invokePassabe = () => {
    ref.current.children[0].click();
  };

  useEffect(() => {
    async function addPassbaseButton() {
      const PassbaseButton = await import('@passbase/button');

      if (PassbaseButton && ref.current) {
        PassbaseButton.default.renderButton(
          ref.current,
          onFinished,
          "2b4598cdbb809d8b7a34ba534d76447634ed9a8d58bb498421f72cd8187df048",
          {
            prefillAttributes: { email: prefilled?.email },
          },
        );
      }
    }

    addPassbaseButton().catch(() => {
      // do nothing in case if loading of library fails
    });
  }, [prefilled]);

  return { ref, invokePassabe };
}

usePassbase.PropTypes = {
  onFinished: PropTypes.func.isRequired,
  prefilled: PropTypes.shape({ email: PropTypes.string }),
};

usePassbase.defaultProps = {
  onFinished: () => {},
  prefilled: { email: '' },
};

export default usePassbase;
