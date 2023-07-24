import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AngleLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AngleLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAngleLeft} {...props} />;
};

export default AngleLeft;
