import { faSquareVirus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareVirus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareVirus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareVirus} {...props} />;
};

export default SquareVirus;
