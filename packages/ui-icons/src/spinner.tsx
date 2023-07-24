import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Spinner icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Spinner = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSpinner} {...props} />;
};

export default Spinner;
