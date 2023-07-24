import { faMehBlank } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MehBlank icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MehBlank = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMehBlank} {...props} />;
};

export default MehBlank;
