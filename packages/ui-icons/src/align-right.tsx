import { faAlignRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AlignRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AlignRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAlignRight} {...props} />;
};

export default AlignRight;
