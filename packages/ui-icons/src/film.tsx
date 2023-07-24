import { faFilm } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Film icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Film = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFilm} {...props} />;
};

export default Film;
