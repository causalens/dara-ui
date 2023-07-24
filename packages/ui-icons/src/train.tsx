import { faTrain } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Train icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Train = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrain} {...props} />;
};

export default Train;
