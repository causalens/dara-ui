import { faGolfBallTee } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GolfBallTee icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GolfBallTee = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGolfBallTee} {...props} />;
};

export default GolfBallTee;
