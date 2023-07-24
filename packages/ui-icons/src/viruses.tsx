import { faViruses } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Viruses icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Viruses = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faViruses} {...props} />;
};

export default Viruses;
