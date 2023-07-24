import { faSort } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Sort icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Sort = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSort} {...props} />;
};

export default Sort;
