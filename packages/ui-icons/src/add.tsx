import { faAdd } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Add icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Add = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAdd} {...props} />;
};

export default Add;
