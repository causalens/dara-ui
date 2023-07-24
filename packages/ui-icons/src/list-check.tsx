import { faListCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ListCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ListCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faListCheck} {...props} />;
};

export default ListCheck;
