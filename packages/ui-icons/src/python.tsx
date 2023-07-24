import { faPython } from '@fortawesome/free-brands-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * A Python icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Python = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPython} {...props} />;
};

export default Python;
