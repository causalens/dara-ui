import { faPager } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Pager icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Pager = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPager} {...props} />;
};

export default Pager;
