import { faPercentage } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Percentage icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Percentage = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPercentage} {...props} />;
};

export default Percentage;
