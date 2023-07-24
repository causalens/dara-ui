import { faNavicon } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Navicon icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Navicon = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faNavicon} {...props} />;
};

export default Navicon;
