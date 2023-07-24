import { faListOl } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ListOl icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ListOl = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faListOl} {...props} />;
};

export default ListOl;
