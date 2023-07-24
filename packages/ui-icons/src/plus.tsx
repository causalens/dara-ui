import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Plus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Plus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlus} {...props} />;
};

export default Plus;
