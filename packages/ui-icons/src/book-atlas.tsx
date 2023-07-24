import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BookAtlas icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BookAtlas = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBookAtlas} {...props} />;
};

export default BookAtlas;
