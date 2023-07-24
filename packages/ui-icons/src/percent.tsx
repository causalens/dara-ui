import { faPercent } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Percent icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Percent = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPercent} {...props} />;
};

export default Percent;
