import { faVihara } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Vihara icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Vihara = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVihara} {...props} />;
};

export default Vihara;
