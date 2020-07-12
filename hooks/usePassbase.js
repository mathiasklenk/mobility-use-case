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
          "ebb8c2f2c2b27d10a1dfdf1bd0a882455b0f5cfcfd37f2a9020d24cfbe08feaa",
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
