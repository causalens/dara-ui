import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareMinus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareMinus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareMinus} {...props} />;
};

export default SquareMinus;
