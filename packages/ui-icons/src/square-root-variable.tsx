import { faSquareRootVariable } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareRootVariable icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareRootVariable = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareRootVariable} {...props} />;
};

export default SquareRootVariable;
