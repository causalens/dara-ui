import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AlignJustify icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AlignJustify = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAlignJustify} {...props} />;
};

export default AlignJustify;
