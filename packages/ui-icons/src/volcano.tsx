import { faVolcano } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Volcano icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Volcano = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVolcano} {...props} />;
};

export default Volcano;
