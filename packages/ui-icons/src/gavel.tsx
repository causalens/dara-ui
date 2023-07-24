import { faGavel } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Gavel icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Gavel = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGavel} {...props} />;
};

export default Gavel;
