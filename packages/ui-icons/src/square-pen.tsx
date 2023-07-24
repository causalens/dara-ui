import { faSquarePen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquarePen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquarePen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquarePen} {...props} />;
};

export default SquarePen;
