import { faList } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * List icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const List = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faList} {...props} />;
};

export default List;
