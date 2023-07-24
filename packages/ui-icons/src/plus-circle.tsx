import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlusCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlusCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlusCircle} {...props} />;
};

export default PlusCircle;
