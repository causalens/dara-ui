import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AngleDoubleLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AngleDoubleLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAngleDoubleLeft} {...props} />;
};

export default AngleDoubleLeft;
