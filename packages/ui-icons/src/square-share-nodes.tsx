import { faSquareShareNodes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareShareNodes icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareShareNodes = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareShareNodes} {...props} />;
};

export default SquareShareNodes;
