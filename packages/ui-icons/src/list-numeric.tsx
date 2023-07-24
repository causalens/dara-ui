import { faListNumeric } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ListNumeric icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ListNumeric = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faListNumeric} {...props} />;
};

export default ListNumeric;
