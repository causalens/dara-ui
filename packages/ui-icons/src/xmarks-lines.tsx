import { faXmarksLines } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * XmarksLines icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const XmarksLines = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faXmarksLines} {...props} />;
};

export default XmarksLines;
