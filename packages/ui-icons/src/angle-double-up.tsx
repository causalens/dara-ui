import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AngleDoubleUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AngleDoubleUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAngleDoubleUp} {...props} />;
};

export default AngleDoubleUp;
