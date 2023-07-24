import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * XmarkSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const XmarkSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faXmarkSquare} {...props} />;
};

export default XmarkSquare;
