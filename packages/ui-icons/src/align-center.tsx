import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AlignCenter icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AlignCenter = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAlignCenter} {...props} />;
};

export default AlignCenter;
