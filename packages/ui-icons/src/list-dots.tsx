import { faListDots } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ListDots icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ListDots = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faListDots} {...props} />;
};

export default ListDots;
