import { faListUl } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ListUl icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ListUl = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faListUl} {...props} />;
};

export default ListUl;
