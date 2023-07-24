import { faShareAltSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShareAltSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShareAltSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShareAltSquare} {...props} />;
};

export default ShareAltSquare;
