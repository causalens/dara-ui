import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AngleDoubleDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AngleDoubleDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAngleDoubleDown} {...props} />;
};

export default AngleDoubleDown;
