import { faSquareFull } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareFull icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareFull = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareFull} {...props} />;
};

export default SquareFull;
