import { faList12 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * List12 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const List12 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faList12} {...props} />;
};

export default List12;
