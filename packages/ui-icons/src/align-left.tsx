import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AlignLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AlignLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAlignLeft} {...props} />;
};

export default AlignLeft;
