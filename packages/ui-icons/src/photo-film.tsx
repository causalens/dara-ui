import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PhotoFilm icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PhotoFilm = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPhotoFilm} {...props} />;
};

export default PhotoFilm;
