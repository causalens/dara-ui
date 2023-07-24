import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Dumbbell icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Dumbbell = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDumbbell} {...props} />;
};

export default Dumbbell;
