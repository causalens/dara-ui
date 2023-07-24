import { faImagePortrait } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ImagePortrait icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ImagePortrait = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faImagePortrait} {...props} />;
};

export default ImagePortrait;
