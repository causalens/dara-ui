import { faPrint } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Print icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Print = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPrint} {...props} />;
};

export default Print;
